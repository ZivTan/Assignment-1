# Hakka LeiPopo's Website

This website was made with the goal to spread the word of the hawker stall to new customers and at the same time allow customers to reach out to the stall owners. It also allows anyone who is interested in the backstory of the stall to learn of its beginnings. As I've heard from the stall owners, they are currently a bit understaffed, this website could also act as a method to attract people to apply for a position at the stall.

## Design Process

As the stall sells Leicha and it is green and a very healthy food, the main color theme I choose for the website was light green. The wooden background was to emphasize a traditional feel to the website.

This website was made with the intentions of letting the customers learn more about the hawker stall while promoting the owner's social medias. It also lets customers have an easier way to spread the word to their friends or family by just reccommending the website. At the same time it is a good way to catch the attention of someone who is looking for a job at a hawker stall and links them straight to the linkedln for the application.

###### User Stories

1 As a customer who loved the food, I want to recommend the stall to my friends and family so that they may also share the experience.

2 As a person who heard about this stall, I wanted to find out the locations of their stalls and if they are near me. At the same time I also want to know their operating hours so that I may choose a time to visit.

3 As a person who only recently caught wind of the stall, I want to see what types of food that they sell and whether I would like to pay a visit to try.

4 As a teenager who has experience in the food industry is looking for a summer job I want to reach out to the owners in order to apply for a position or see if they have other socials that I can apply from.

###### Wireframe

1 Desktop View - https://xd.adobe.com/view/29d3dff6-c9a1-4e94-9d6b-a9954a233fe0-7c80/

2 Mobile View - https://xd.adobe.com/view/b5ccf9ca-650e-43a3-b34d-a6a43d18bb66-e09f/

## Features

###### Existing Features

- Image Carousel - This features automatically scrolls through images for the user or they could decide to manually scroll it themselves.

- Read More Buttons - Takes the user to the page that is related to the summary of the container if the user is interested.

- Social Buttons - Allows user to instantly go to the facebook, instagram and linkedln of the stall owners.

- Play Video Button - Allows user to decide whether they want to listen to the video or just read the summary positioned next to it in the about us section.

- Form Submission - The user can submit enquiries or complaints through filling in the form provided.

- Go to top button - Lets the user avoid scrolling all the way back to the top through the press of the button.

###### Features Left to Implement

- Add to cart - Allows the user to see the price of each food item and add them to a cart which they could purchase through online transactions.

# Technologies Used

- 1 HTML
- 2 CSS
- 3 Javascript
- 4 Fontawesome - For implementation of icons. (https://fontawesome.com/icons)
- 5 FormSubmit - To enable to sending of forms to the specified email address.
  (https://formsubmit.co/)
- 6 Google Maps - To show the location of the stall.
  (https://www.google.com/maps)

# Testing

1. Image Carousel:
   i. Go to the 'Home' page.
   ii. Test the buttons and see if the images scroll.
   iii. Had to rescale images as it overflowed out the screen.
   iv. Readjust the width of picture to 100% and height to auto so that it scales in mobile view.
   v. Manually choosing the images sometimes messes up the sequence of the automatic scrolling of the images.

2. Read More Buttons:
   i. Go to the 'Home' page.
   ii. Test the buttons and see if they take the user to the relevant page.
   iii. Check if the buttons in navigation tab do the same.
   iv. Added fade in animation to all pages to have smoother transitions.
   v. Having a:href for buttons result in error, had to change to form tag.

3. Go To Top Button:
   i. Go to 'Home', 'Our Menu' and 'Contact' page.
   ii. Press the button and see how it takes the user to the top.
   iii. Added scroll smooth function so that it looks better when button is clicked.

4. Play Video Button:
   i. Go to the 'About Us' page.
   ii. Hit the play button and see if the video plays.
   iii. Had to add Z-index as the button was covered by the TV png despite the png being transparent.

5. Social Buttons:
   i. Go to 'Home', 'About Us', 'Our Menu' and 'Contact' page.
   ii. Test if the buttons work and take the user to the assigned social media platforms.
   iii. Having a:href for buttons result in error, had to change to form tag.

6. Food Description:
   i. Go to 'Our Menu' page.
   ii. Hover over each container and see if the container shows up as intended.
   iii. Had to implement overflow - x,y: hidden as the vertical and horizontal scrollbar kept appearing.
   iv. The fonts had to be readjusted due to poor visibility.

7. Contact Form:
   i. Go to 'Contact' page.
   ii. Try to submit the empty form and verify that an error message about the required fields appears.
   iii. Verify if the form is submitted to the specified email address.

8. Google Maps:
   i. Go to 'Contact' page.
   ii. Verify the maps are displaying the right locations and are in the right width and height.
   iii. Error resulted from width px and height auto in iframe tag.
   iv. Added media tag to fix the positioning of the map when in mobile view.

# Credits

## Media

- The photos, including the menu were all obtained from the stall owner herself and their social media, (https://www.facebook.com/hakkaleipopo/photos/?ref=page_internal) and (https://www.instagram.com/hakkaleipopo/?hl=en).

- The TV png was obtained from pngitem.com.
  (https://www.pngitem.com/middle/hbwmh_old-television-png-image-transparent-png/)

## Acknowledgement

- I've received inspiration from both websites (https://foodrepublic.com.sg/) and (https://hakkaleipopo.com/en/).
