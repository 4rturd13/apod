# README

Here I will explain how this mini project works

> **NOTE:** https://validator.w3.org/ throws an error due to a format used in the date input. I can't correct it because I need external libraries and Holberton doesn't allow it. This does not affect its use in modern browsers

Please let me your comments in sidebar Disqus...

## Home

> If you prefer to see the page in dark mode, press the toggle at the top

### Section 1 & 2

This connects to NASA's Apod API. Bring an **image** of the day its **author**, the **date** and the **title**. Section 2 brings the description related to the image. You can change the dynamic data by choosing a new date in the entry at the top of the page.

> **Note:** If the chosen date does not bring information, it is because NASA does not have information on that specific field for that date, the page will ask you to change the day to display information. Remember that this is connected to NASA and the data shown depends on them feeding the information on the chosen date.

> By default the page brings current information and every day it changes dynamically. You cannot choose future dates because they are images of the day and until **06-20-1995**, the day the first image was published

### Section 3

The third part of the page connects with the YouTube API and brings the last 4 videos that the NASA channel published.

> **Note:** Every time a new video is published the page will automatically bring it up

# Tweets

This is normal as requested by the test since the Twitter API is very **rare** and I cannot consume it from the browser

# Gallery

This page also connects with NASA and obtains images of search parameters such as: **Neowise, Mars, Sun, Moon, Iss etc ...**

> **Note:** Due to the large amount of data I had to restrict the images of the petition to only the year **2020**

> By default this starts with the search for **Neowise comet**

The possibilities of keywords are almost infinite so I can't list them, try using names of **planets, comets, continents, countries, stars etc ...**
