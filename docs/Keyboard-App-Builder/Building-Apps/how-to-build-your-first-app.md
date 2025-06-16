---
title: How to Build Your First App
sidebar_position: 2
slug: /how-to-build-your-first-app
---



# How to Build Your First App {#21480858a4b681a185a7cfff9dc07c2b}


To build your first app with Keyboard App Builder:

1. Launch **Keyboard App Builder** from its icon on the desktop.
2. Click **New App** on the toolbar. The New App wizard will appear.
3. On the first page of the wizard titled **App Name**, specify the **App Name**, such as “Dogon Keyboard”, “Mamara Keyboard”, etc.

	> This is the main title of your app and will be seen by the user. Do not include underscores or hard to understand abbreviations.


		Click **Next** to move to the next page.

4. On the page of the wizard titled **Package**, specify the **Package Name**, a dot-separated string which uniquely identifies your app.

	> More details about choosing a good package name can be found in section 4.1. How should I choose the app package name?


	Click **Next** to move to the next page.

5. On the next page of the wizard titled **Keyboard**, click **Browse…** and select the Keyman keyboard layout file you want to use in the app.

	> Click Next to move to the next page.

6. On the next page of the wizard titled **Lexical Model**, click **Browse…** and select the Keyman lexical model file you want to use in the app. This is optional; you do not need to specify a lexical model.

	> Click Next to move to the next page.

7. On the page of the wizard titled **Color Scheme**, choose the app color scheme.

	> Click Next to move to the next page.

8. On the page of the wizard titled **Default Interface Language**, choose the language you want users to see when they first enter the app. This can be the current system language.

	> Click Next to move to the next page.

9. On the page of the wizard titled **Interface Languages**, choose the app interface languages that the user can choose between.

	> Click Next to move to the next page.

10. On the page of the wizard titled **Icon**, choose the application launcher icon. You can select one of the images in the table or if you have your own PNG image files for the icon, click **Browse** and select them.

	> Click Next to move to the next page.

11. On the page of the wizard titled **Signing**, you need to specify the keystore and alias to use to sign the app. An app must be signed in this way so that it can installed on an Android device.

	> If you do not already have a keystore file (which you are unlikely to have if this is your first time using the program):

12. Click **Create KeyStore**.
13. Enter a new filename for the keystore, such as “keystore1” or something like that. Specify a password. Click **Next** to continue.
14. Enter an alias name for a key to create within your new keystore, such as “key”. Specify a password, which can be the same as the password you entered on the previous page. Click **Next** to continue.
15. On the **Certificate Issuer** page, provide details of your organisation in at least one of the fields. Click **Next** to continue.
16. A new keystore will be created for you. Click **Close**.
17. Back on the **Signing** page of the New App wizard, you need to specify the keystore password, select the alias and enter the alias password (just as you entered them in the step above).

	> Click Next to continue.

18. On the page of the wizard titled **Project**, you can enter modify the project name and add an optional description of the app project. Neither of these will be visible to the user of your app. They are just for your own use and might help you distinguish between multiple app projects.

	> Click Next to continue. The New App wizard will close, and the app definition will be added to the tree view on the left of the screen.

19. Take a look at each of the app configuration pages by selecting them in the tree view on the left. Look in each of the tabs on each page to verify that you have the settings you want. You can always go back to them later to change them if you find you need to make modifications to fonts, colors, styles, etc.
20. When you have finished configuring the app, click the **Build Android App** button on the toolbar at the top of the screen.

	> If something is not configured correctly for the build to work, you will be notified of this.

21. A black command box will appear. Wait about a minute while the app is compiled.

	> The first time the build process is run, the compiler needs to connect to the internet to download some files. After this, subsequent app builds will not require internet access. See Tools ⮚ Settings… ⮚ Build Settings to turn on offline mode after the first app build.

22. If the build succeeds, you will have a new APK file – the installation file for an Android app.

The next section describes how to copy this APK file to your phone and launch the app.

