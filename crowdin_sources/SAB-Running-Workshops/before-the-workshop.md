---
title: 2. Before the workshop
sidebar_position: 1
slug: /before-the-workshop
---



# 2. Before the workshop


## 2.1 Understand your participants


Find out about each of the participants before they come:

- their interest in building apps;
- their desired outcomes as a result of the workshop;
- their computer skill level;
- what type of computer they will come with, i.e. Windows, Linux or Mac;
- what impact on their organization/community do they expect to see after they leave, etc.

## 2.2 Prepare the course content


As you prepare the contents of the course, consider including sessions on the following:

- An introduction to smartphones and smartphone apps – and how they are being used in your part of the world. What changes are you seeing?
- How to install Scripture App Builder and its components.
- How to create your first Scripture app from sample Paratext files.
- How to clean up your own Paratext files for use in an app. (This could be combined with sessions on how to prepare translated books for submission to the Digital Bible Library.)
- How to configure your app with colors, borders, icons, splash screen, etc.
- How to create an app with synchronized text and audio – using Audacity and/or aeneas. (You are likely to need more than one session for this.)
- How to create an app with multiple book collections, e.g. one or more local languages, plus an English or French translation.
- How to create a song book app.
- How to create a picture story app.
- How to create an app with a contents menu.
- How to create an app with an expiry date.
- How to get the About Box information right: understanding copyright and licensing.
- How to record audio for Scripture portions using HearThis and use in an app.
- How to check that an app is ready to publish (using the App Publishing Checklist).
- How to distribute your apps: Google Play, memory card, Bluetooth, Wifi sharing app (SHAREit, Xender), BibleBox, Lightstream, etc.
- How to market your apps on social media, e.g. Facebook. How to do smartphone screen-recording so you can include short video clips of the app to use on your Facebook page.

Make sure each session has clear learning objectives with plenty of time for the participants to practice building apps.


## 2.3 Prepare folders of files


Prepare folders of files to distribute to the participants.


Include the following items:

- **Instruction manuals:**
	- Download each of the manuals in PDF format here: [http://software.sil.org/scriptureappbuilder/resources/](http://software.sil.org/scriptureappbuilder/resources/)
- **Video tutorials:**
	- Download the videos from the SIL Language Technology Vimeo channel: [https://vimeo.com/channels/967640](https://vimeo.com/channels/967640)
- **Installation files for Windows:**
	- Scripture App Builder setup program:
		- **Scripture-App-Builder-5.0-Setup.exe**, or a later version.
		- Download the latest installer from the [Scripture App Builder website](http://software.sil.org/scriptureappbuilder/download/).
	- JDK installer: include both 64-bit and 32-bit versions
		- **jdk-8u191-windows-i586.exe** - for 32-bit Windows
		- **jdk-8u191-windows-x64.exe** – for 64-bit Windows
		- Download the latest files from the [JDK 8 Downloads website](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
	- Android SDK:
		- Instead of asking the workshop participants to install the Android SDK from the command line tools setup program and then download the additional components from the internet, it is easier to package all of your Android SDK files as a single zip file.
		- To do this, assuming you have already installed the Android SDK yourself, find the Android SDK folder on your computer with all of the files already downloaded. Zip the contents of the folder including all of its sub-folders.
		- The participants will need to unzip this file onto their hard disks, e.g. to c:\sdk. There is no setup program to run, no need to use SDK Manager and no need to access the internet.
		- For more details, please see the Android SDK section of the _Installation Instructions_ manual.
	- aeneas tools setup program:
		- **aeneas-windows-setup-1.7.3.exe**
		- Download the latest installer from the [Scripture App Builder website](http://software.sil.org/scriptureappbuilder/download/).
	- Gradle cache folder:
		- Scripture App Builder normally needs internet access the first time you build an app. It will download a set of libraries used by the Gradle compiler. If you want to enable workshop participants to build apps without needing internet access, it is possible to copy the Gradle cache files to a folder on their computer and then tell SAB where there are to be found.
		- This will only work, however, if the absolute path to the files is exactly the same on the computer from which the files are taken as on the participant’s computer, e.g. “C:\gradle” on computer A and “C:\gradle” on computer B. It will not work if you have “C:\Users\John\.gradle” or computer A and “C:\Users\Jenny\.gradle” on computer B (which is the default Gradle cache folder).
		- So, on computer A, to get the cache files to distribute:

1. Go to Tools > Settings > Build Settings > Gradle Cache Folder.


2. Enter “C:\gradle” and OK.


3. Build an app. The Gradle cache files will be downloaded to C:\gradle.


Then, on computer B:


4. Copy the C:\gradle folder from computer A to C:\gradle.


5. Go to Tools > Settings > Build Settings > Gradle Cache Folder.


6. Enter “C:\gradle” and OK.

- **Installation files for Mac:**
	- If some of your participants will come with Apple Mac computers, include the relevant Scripture App Builder installation files for Mac. Refer to the document _Installing and Building Apps on a Mac_ for more details.
- **Sample files:**
	- Sample Paratext Scripture files
	- Sample songs in text and audio format
	- Sample Bible story text, pictures and audio files
- **Extra software:**
	- Notepad++ - [https://notepad-plus-plus.org](https://notepad-plus-plus.org/)
	- Audacity - [http://www.audacityteam.org](http://www.audacityteam.org/)
	- HearThis - [http://software.sil.org/hearthis](http://software.sil.org/hearthis)
	- 7zip - [http://www.7-zip.org](http://www.7-zip.org/)
- **Other App Builders:**
	- Dictionary App Builder:
		- (download the latest installer from the [Dictionary App Builder website](http://software.sil.org/dictionaryappbuilder/download/)).
- Reading App Builder:
	- (download the latest installer from the [Reading App Builder website](http://software.sil.org/readingappbuilder/download/)).

## 2.4 Equipment needs


You will need:

- A **data projector** and **screen**.
- **Internet access**: required for the build of the first app (unless you copy the Gradle cache folder between computers).
- A **smartphone with a data package**: this can be very useful in case it is needed as an emergency hotspot (such as to install Java for a computer that doesn’t have it already). Some workshop locations struggle if a room of people are trying to connect to the internet at once.
- **Spare USB cables and adapters** for those participants who do not come with them.
- A **means of distributing files** to the participants: [BibleBox](http://www.biblebox.org/), [LightStream](http://www.renewoutreach.com/lightstreams/), USB memory sticks, etc.
- A **Google Chromecast** device to display a smartphone screen on the data projector. This will require an HDMI port on the projector.

**Equipment for participants**


Ask participants to bring the following equipment with them:

- a laptop computer;
- an Android smartphone or tablet;
- a USB cable to connect their phone to their computer;
- microSD card and microSD card adapter;
- a headset with microphone for recording.

The detailed list of installation files in the section above assumes participants will come with Windows laptops. If any have Linux or Mac computers, you will need to research if and how you can assist them in installing the App Builder.

