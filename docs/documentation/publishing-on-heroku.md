# Publishing on the web (Heroku)

Heroku runs your prototype online, the same as it runs on your machine, but available to others at any time. Other similar services are available.

You'll need to have [put your code on GitHub](/docs/github-desktop) to use this guide. If you cannot put your code on GitHub, you can try [publishing to Heroku from the terminal](/docs/publishing-on-heroku-terminal) instead.

## Create an app on Heroku

1. [Create a free Heroku account](https://heroku.com)

2. In the top right click **New** then **Create new app**.

<<<<<<< HEAD
![Screenshot of Heroku Create App page](/public/images/docs/heroku-create-app.png)
=======
![Screenshot of Heroku Create New App page](/public/images/docs/heroku-create-app.png)
>>>>>>> f905369 (Master update)

3. Enter a name for your prototype app. App names in Heroku have to be unique across all the users of Heroku. It can be helpful to add your name or organisation to the start of the name to make it unique. For example joelanman-juggling-prototype.

4. Select Europe for the region - it’s not important but makes your prototype a bit faster.

5. Click **Create app**.

## Deploy your prototype

1. For **Deployment method** choose **GitHub**. ‘Deploy’ means publish.

<<<<<<< HEAD
![Screenshot of Heroku deploy page](/public/images/docs/heroku-deploy.png)
=======
![Screenshot of section of page headed Deployment method](/public/images/docs/heroku-deploy.png)
>>>>>>> f905369 (Master update)

2. Scroll down and click **Connect to GitHub**.

3. In the popup, click **Authorize Heroku**.

4. In the repo-name field, click **search**. You can leave it blank and it will give a list of all your repos.

5. Click **connect** on the right of your repo.

6. Scroll down to the **Automatic deploy** section and click **Enable Automatic Deploys**.

7. Scroll down to the **Manual deploy** section and click **Deploy branch**.

8. Wait for the deploy to finish.

Your prototype will deploy automatically each time you push your code to GitHub (it takes a few minutes each time).

## Set a username and password

We need to set a username and password or the Prototype Kit won’t run online. They don’t have to be complicated – it’s just to stop people accidentally coming across your prototype online and mistaking it for a real service.

1. At the top click the **Settings** tab.

2. Click **Reveal config vars**.

3. In KEY put the word USERNAME

4. In VALUE put a username of your choice, click **Add**.

That will be saved and you can add another KEY and VALUE.

5. In KEY put the word PASSWORD

6. In VALUE put a password of your choice, click **Add**.

7. In the top right, click **Open app** to see your prototype online!
