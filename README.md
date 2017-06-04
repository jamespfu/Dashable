# Dashable
Dashable is a python script for the Amazon Dash, easily enabling you to automate button press actions via IFTTT.
This script was for an entrepreneurship project that we did in school.

## Website
You can visit the UI for the e-commerce website we created at the url https://dashable.cf/.

## Python
The Python code can be found in the 'Python' folder. It works by detecting ARP packets sent over the network and triggering actions if there are any :)

## Android
We also created an Android application that intercepted UDP packets sent form an Ubuntu server, and then sent the desired SMS message to the specified recipient. You can download the .apk file, but its in beta so it isn't fully-functional.

## Instructions
### Connecting to IFTTT
The following action will teach you how to create an IFTT action with the IFTTT Maker Webhooks platform. 

1. You will first need to sign up and create an account at the URL https://ifttt.com/.

2. After creating your account, click the search button. Search for Maker Webhooks, and then press the 'connect' button.

3. Go to 'My Applets'.

4. Create a new applet by selecting the 'New Applet' option.

5. Click on the this text/button. Search for Maker Webhooks, and select it. If this step does not work, you might want to refer back to step two.

6. You will be prompted to a screen that asks you to choose a trigger. Choose the 'Receive a web request' trigger, and create a new event name. You can name it anything you want!

7. Click on the 'that' button. You will be prompted to a screen, with many options, all of which you can choose to trigger when the Dash button is pressed. A few of the ones I recommend trying are the SMS, Phone Call and Philips Hue events.

8. Create the action, modify it if you would like to. You will be prompted to a page that asks you to Review and Finish. After you are sure that you have finished, hit the 'finish' button.

9. You're done setting up IFTTT! Give yourself a pat on the back.

10. We will only be modifying a few lines of the code, not everything. Open up or clone the 'dash.py'. For reference, it is located in the Python folder.

11. Return to the Maker Webhooks screen (search Maker Webhooks again).

12. Hit the 'documentation' option.

```python
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
```

13. In the code section above, modify your code and insert the https://maker.ifttt.com/trigger/{event}/with/key/ + key with your event name and key into the parenthesis that follow the get request line. (You should be able to find the key on the documentation page. 

14. For the post URL, enter in the same URL you did for the get requests.

15. Lastly, press and hold on your Amazon Dash button until the blue light starts blinking.

16. On a Wifi-enabled device, connect to the Wifi service Amazon ConfigureMe.

17. Open a new browser window, and go to 192.168.0.1

18. Replace the current MAC address(es) with your MAC address, which should be displayed on the Amazon Dash page.

19. If you do not have two Amazon Dashes, you can just delete the elif source_mac == second statement, and also the variable that stores the mac address of the second dash

20. You're all set! Save the code and run it with SUDO! Make sure that you have connected it with the Amazon Shopping app and that your Dash is connected to wifi, and not assigned to a product (to prevent accidental purchases).

## Issues
### Contact
If you have any issues with completing the following steps, find a bug, or if you just have a general question about Amazon Dash or this code feel free to email me at kawaiikid47@gmail.com. I normally respond within 24 hours.
