import socket
import struct
import binascii
import requests

# Store the mac address of the Amazon Dash
# I got the mac address by connecting to the Amazon Dash's wifi network (it actually has its own network) and then visiting the ip address for the dash (192.168.0.1)
MAC = '6837e9a39acb'

# Since we are working with raw sockets as we need to sniff EVERYTHING on the network, we must run the python code with sudo
rawSocket = socket.socket(socket.AF_PACKET, socket.SOCK_RAW, socket.htons(0x0003))

while True:
    packet = rawSocket.recvfrom(2048)
    ethernet_header = packet[0][0:14]
    ethernet_detailed = struct.unpack('!6s6s2s', ethernet_header)
    arp_header = packet[0][14:42]
    arp_detailed = struct.unpack('2s2s1s1s2s6s4s6s4s', arp_header)
    # skip/filter outnon-ARP packets - amazon dash sends an arp packet
    ethertype = ethernet_detailed[2]
    if ethertype != '\x08\x06':
        continue
    source_mac = binascii.hexlify(arp_detailed[5])
    dest_ip = socket.inet_ntoa(arp_detailed[8])
    # if mac address is the same as the one found, then we can assume that the dash button has been pressed because each device has its unique mac (like a social security number)
    if source_mac == MAC:
        print "Dash button pressed! From IP = " + dest_ip
    # post http request and retrieve info from ifttt
	r = requests.get('https://maker.ifttt.com/trigger/dash_button_pressed/with/key/c0AD9nsw-5A063TW25wtif')
	# post it and basically activate and call my phone
	r = requests.post('https://maker.ifttt.com/trigger/dash_button_pressed/with/key/c0AD9nsw-5A063TW25wtif', data = { "value1" : "hi", "value2" : "does", "value3" : "work" } )
    else:
        print "Random ARP packet from mac = " + source_mac