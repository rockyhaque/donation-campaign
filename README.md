# Donation Campaign

Welcome to our Donation Campaign Project! This repository hosts all the information and resources related to our campaign aimed at help more people.

## Main Requirements ✍

1. `Follow the figma design:` Your website design should be similar to the
   figma.

2. `Navbar:` A navbar with a website logo on the left side & 3 menu items on the right
   side: Home, Donation, Statistics. Make sure to apply Active route on the
   navbar & the navbar will be displayed in all pages.

3. `A banner section having:` title,searchbar,backgroundimagewithoverlay.
   Coveringthebackgroundimagefromnavbartobanneris optional .However,
   coveringonlythebannersectionwiththebackgroundimageis mandatory.

4. `Createajsonfilehavingatleast 12 data.Eachdatashouldhave:`
   a. Picture
   b. Title
   c. Category
   d. Colorforcategory_bg
   e. Colorforcard_bg
   f. Colorfortextandbuttonbackground
   g. Description
   h. Price

5. `Home page:` Create a section where there will be at least 12 cards. Arrange the cards according to the figma. 4 cards in a row

` Note:` Each card will have 3 different colors:

> ● Background Color for card
> ● Background Color for category
> ● Color for title and category text. The color of the text of the category and the title will be the same. See figma.

6. `Card:` Onclicking acard,theuserwillberedirectedtotheDonationDetailspage
   wherehe/shewillbeabletoseethedetailsoftheDonation.

7. `Donation Details Page:` Thiswill bea dynamicroute.TheDonationdetails
   pagewillhavethefollowing:

> ● Picture ● Title ● Description ● **_Donate_** button having the price

> Note: Make sure that the Donate button background color matches with the text color of the Card in the Homepage. The picture will have an overlay with the Donate button at the left. See figma.

On clicking the Donate Button,youwillhave toshowatoast/sweetalert
informing the user with a meaningful success message. Do not use the
browseralert.

8. `Donationpage:` The Donation Page will show all the donations you have made. Each row will have 2 cards. Each card will have the following:

> ● Picture ● Category ● Title ● Price ● View Details button

`Note:` Make sure that the background color of the card matches with the
background color of the card in the homepage. The category text, price and
the background of the View details button will have the same color as shown
in the figma. Also, there will be a background for the category

The See All button on the Donation page will appear when the Donation cards
are more than 4. On clicking the See All button the remaining data will be
shown and the See All button will be hidden. You can change the color of the
See All button if you want

Making the View Details button functional is optional

9. `Statisticspage:` Create a statistics page where you will have to implement a
pie chart. You cannot use a line chart or any other charts. You will only have
to implement a pie chart. The pie chart will be on your donations against the
total donations. For example: you made 4 donations and the total
donations is 12. Calculate the percentage and show it on your pie chart.
Follow the figma.


## Bonus Requirements 🎁

1. You will need to make the search button functional. In the search bar, users
can input categories to search for donations. When a category is entered
into the search bar, clicking the search button will display only the donations
that match the specified category on the homepage.


2. Your Readme file will have at least 3 project features. Add at least five
meaningful github commits.

3. Make a 404 route. Reloading the web app should not show a page not found
error.


4. The website should be responsive in all devices: desktop, mobile and tablet
views. The responsive layout is up to you.

---

Let's Code Your Career!
