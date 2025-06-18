---
title: Installing the App On Your Phone
sidebar_position: 3
slug: /installing-the-app-on-your-phone
---



# Installing the App On Your Phone {#21480858a4b6817e84d1f4bd2f2054f4}


In the above section, you have seen how to compile an Android app. The result is an APK file, the installation file for an Android app. You now need to copy this APK file to your phone, install it and launch the app.


Here is how to do this:

1. Connect your Android phone to your computer using a **USB data cable**.

	(Sometimes you get cheap USB cables that can only charge a phone but cannot transfer data, so make sure you have the right kind of cable.)

2. Ensure that **Developer Options** ⮚ **USB Debugging** is enabled on your phone. By default, on new phones, Developer Options is turned off. This is how you can enable it:
	1. Open the **Settings** menu of your phone.
	2. Scroll down to the bottom of the menu and tap on **About Phone**.
	3. Find the **Build Number**. This could be on the About Phone page, or under a sub-menu such as ‘Software Information’.
	4. Tap on the Build Number **seven times**. As you do this, you will see a series of messages appearing: “You are now 3 steps away from being a developer”, “You are now 2 steps away from being a developer”, “You are now 1 step away from being a developer”, “You are now a developer!”.

		![](/notion_imgs/installing-the-app-on-your-phone.21480858-a4b6-81ee-a818-c838470589cf.png)

	5. Now return to the Configuration menu of your phone. Look for the Developer Options menu item. You might see **Developer Options** above the **About Phone** menu item. If you do not see it here, it could be in **System** settings, under **Advanced**. Different phones place Developer Options in different places, so look around your Configuration menu until you find it.

		![](/notion_imgs/installing-the-app-on-your-phone.21480858-a4b6-816f-9f18-e93087ffb5fa.png)

	6. Tap on **Developer Options** and ensure that it is turned on.
	7. Scroll down the Developer Options page and find **USB Debugging**. Enable this setting.

		![](/notion_imgs/installing-the-app-on-your-phone.21480858-a4b6-8169-958a-d06833816de3.png)

	8. When you do this, you will probably get a message “Allow USB Debugging?”. Tap OK.

		![](/notion_imgs/installing-the-app-on-your-phone.21480858-a4b6-81e0-8803-dc2441564b4d.png)

	9. If you see a message box like this, tap OK:

		![](/notion_imgs/installing-the-app-on-your-phone.21480858-a4b6-8136-89f4-f73c0e5a4f73.png)

3. In Keyboard App Builder, click the **Install APK** button on the toolbar at the top right of the screen.

	A command window will open and the APK file will be copied to your phone, installed and the app will be launched.


	If this does not work, look at the command window to see if there is an error message. If you see a message such as “No devices/emulators found”, it means that your phone and computer are not connected correctly or that you have not enabled USB debugging on your phone.


<u>_Note:_</u>


Described above is a two-step process: **Build App** and then **Install APK**. If you prefer, you can tell Keyboard App Builder to do this in one step, i.e. for the APK to be installed and launched automatically after building an app. See **Tools** ⮚ **Settings…** ⮚ **After Build** to enable this feature.

