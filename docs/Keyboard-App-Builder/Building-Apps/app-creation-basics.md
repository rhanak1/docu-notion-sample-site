---
title: App Creation Basics
sidebar_position: 4
slug: /app-creation-basics
---



# App Creation Basics {#21480858a4b6817bb0f3f010586c266f}


## How should I choose the app package name? {#21480858a4b681f5a981d795ee2737f2}


The standard for an app package name is to begin with the reversed web address of the publishing organisation, e.g. if it is SIL, the package name could begin with:


<u>org.sil</u>


and will be followed by something identifying the language, country, and type of publication, e.g.


<u>org.sil.niger.keyboard</u>


If you work for a university or linguistics organisation, you might have standards to follow for package names, so please contact your digital publications coordinator for advice on this.


Once you publish your app on an app store, you cannot change its package name later if you want users to continue to receive updates. The package name uniquely identifies the app in the Android world. Those who install the app will be able to find its package name on their device. It will also appear in the web address for your app if you make it available on Google Play.


If you are building apps for **test purposes** on your devices, you can use a package name beginning with com.example, e.g.


<u>com.example.test.app123</u>


But remember to change it before you publish the app.


## Do I have to create a new keystore for each app, or can I reuse the same keystore for several of my apps? {#21480858a4b681f3bdcef915f433eba5}


You can use the same keystore and key alias for all or several of your apps.


See here for more details:


[http://developer.android.com/tools/publishing/app-signing.html](http://developer.android.com/tools/publishing/app-signing.html)


## Can I build apps when I do not have internet access? {#21480858a4b68158a16bd02f16a0a56f}


The first time you build an app, you will need to be connected to the internet otherwise the compiler will fail. After that you can set the 'offline' version in **Settings** so you can work offline.

