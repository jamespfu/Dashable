import socket
import struct
import binascii
import requests

# Store mac addresses in a variable
first = '6837e9a39acb'

second = '6837e9288be2' 

# RAW SOCKET PROGRAMMING, requires root access, run with sudo (superuser do)

# htons = host to network
rawSocket = socket.socket(socket.AF_PACKET, socket.SOCK_RAW, socket.htons(0x0003))

while True:

    packet = rawSocket.recvfrom(2048)

    ethernet_header = packet[0][0:14]
    ethernet_detailed = struct.unpack('!6s6s2s', ethernet_header)

    arp_header = packet[0][14:42]
    arp_detailed = struct.unpack('2s2s1s1s2s6s4s6s4s', arp_header)

    # Filter out non-ARP packets
    ethertype = ethernet_detailed[2]
    if ethertype != '\x08\x06':
        continue

    source_mac = binascii.hexlify(arp_detailed[5])

    dest_ip = socket.inet_ntoa(arp_detailed[8])

    # Different mac addresses (different Dash buttons) trigger different events
    # IFTTT for automation, and triggering events, see instructions to get started with creating events
    if source_mac == first:
        print "First Dash button was pressed! From IP = " + dest_ip
        # insert ifttt get and post request below, see instructions for more detailed instructions
        r = requests.get('')
        r = requests.post('', data = { "value1" : "hi", "value2" : "does", "value3" : "work" } )
    elif source_mac == second:
        print "Second Dash button was pressed! From IP = " + dest_ip
        r = requests.get('')
        r = requests.post('', data = { "value1" : "hi", "value2" : "does", "value3" : "work" } )
    else:
        print "Random ARP packet from mac = " + source_mac