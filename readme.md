- [NOISE CONTROL - Festival of AI Art](#noise-control---festival-of-ai-art)
  - [Design](#design)
- [Digital Festival](#digital-festival)
  - [Availibility](#availibility)
  - [Structure](#structure)
    - [Landing Page](#landing-page)
    - [Submission Page](#submission-page)
    - [Festival Page](#festival-page)
  - [Chatbot](#chatbot)
    - [Framework](#framework)
    - [Features](#features)
  - [Webdesign](#webdesign)
  - [Backend](#backend)
- [Analog Festival](#analog-festival)
  - [Structure](#structure-1)
    - [Possible Timetable](#possible-timetable)
      - [Locations](#locations)
    - [Agenda](#agenda)
  - [Submission evaluation](#submission-evaluation)
- [Press Texts](#press-texts)
  - [Introduction](#introduction)
  - [Structure](#structure-2)

# NOISE CONTROL - Festival of AI Art

Alternative title: DENOISING - Festival of AI Art

The name plays with the fact that most of the image generation algorithms used today are actually some kind of denoiser. The art showcased is about people "denoising" the fog that is AI to use it in their works.

## Design

The general design features a contemporary, modern look.

- Colors are dark and cool grey to represent technology
- Headlines are in all caps with stretched letters for a contemporary look, an example font used is [Stretch Pro](https://www.dafont.com/de/stretch-pro.font)
- For paragraphs, a versatile, modern, sans-serif font is used like [Barlow](https://fonts.google.com/specimen/Barlow)
- Dithering is used for gradients in the background to make the noise visible

# Digital Festival

A website accompanying the festival serves as the main entry point for visitors. As a locally bound festival can't reach all people interested in the topic of AI art, the site will be the main attraction.

## Availibility

To transport the event character, the festival's digital entry is bound to a fixed timeframe. General information about the festival can be looked up all the time, before and after its actual start and end. Works will only be displayed within the timeframe of the festival.

- Registration for the festival is open as soon as the site goes live
- The entry to the digital festival is available for 1 week, starting Monday, 10 am and ending Sunday, 8 pm

## Structure

### Landing Page

The landing page is available upon launch. 

Before the festival, information about it is shown as well as a link to the [submission page](#submission-page).

During the festival, live stats are displayed about the attendance of the festival and displayed works. To give attendees a quick overview of the day, a timetable for the current day featuring talks and workshops is displayed without login. The login to the [festival page](#festival-page) is prominently displayed.

After the festival, the landing page is used to show analytics of the festival and displays a summary. News can be shown to continually engage visitors and signup for a newsletter to receive information about a potentially new edition of the festival.

### Submission Page

The submission page is only displayed before the festival until the deadline for submissions. Afterward, the link redirects to the landing page.

On the page, a simple form is available for artists to submit works to the festival as well as the submission guidelines and a FAQ.

### Festival Page

The festival page features two virtual spaces:

1. Stage

Onstage live streams of events are shown. They feature a live chat and show workshops, panel discussions, and scheduled talks.

2. Gallery

In the gallery, visitors can take a look at the submitted artworks and read more about them. All while a [bot](#chatbot) is offering further information via chat.

## Chatbot

First of all, I think in the age of ChatGPT we need to focus on personality for our chatbot. As it won't be as sophisticated as ChatGPT, giving the bot life and fun will ensure a lovely experience for the visitors despite its shortcomings.

### Framework

There are two different types of chatbots:
1. Rule-based
2. AI / NLP

Rule-based bots will follow a certain path based on if/then logic. Users are guided with pre-programmed choices to which the bot will provide pre-programmed answers. The setup is quite easy, but I think the simplicity won't fit our use case.

AI / NLP bots offer a free chat without restrictions for the user. The bot tries to deduct an intent when chatted with and will then answer according to the logic programmed. I think this bot suits our intended experience.

Popular AI / NLP chatbot frameworks are:
- [wit.ai](https://wit.ai/)
- [Microsoft Bot Framework](https://dev.botframework.com/)

### Features

The chatbot should be able to enhance the user experience in three ways:

1. Provide further information

When the artists' submissions are selected, further input from them is required. They should elaborate on their intent, workflow, materials, etc. This information is then not used to solely display on the site, but to be fed to the chatbot. When a user asks, for example, in which period a movie was shot, the bot will reply accordingly. The goal is to have people be more invested in the artworks they are looking at: Reading a paper of the artist about the work is cool, but feeling as if you are discovering further information by chatting with our bot will leave visitors more satisfied and also lead to a deeper connection to the artworks.

2. Open a place for discussion

Should multiple people be visiting the festival site at once, then the bot will provide the visitors with the option to communicate with one another. It will open a temporary group chat where people can, should they agree, chat with one another about the different works. Doing this live would maybe pressure some sort of social anxiety or simply lead to problems with little visitors visiting at once, so the bot could also open up a window serving like a comment section, where visitors can leave their thoughts and maybe come back to further elaborate when someone referred to their previous comment.

3. Gather information from the artists

If a visitor asks a specific question about the artwork and the bot doesn't have the answer in its database, it gives the option to directly ask the artists and return with the answer when possible. The artists will receive an e-mail with the question and can provide further information as long as the festival is live. These answers can then be fed back into the bots and the visitor asking the question will also receive an e-mail from the chatbot, answering the question. This could provide a stress-free (for both sides) funnel from visitor to artist to connect and communicate, should they care to do so.

The bot should always try to provide feature #1 when possible. Feature #2 can activate at random intervals or when another visitor enters the gallery space. Feature #3 should be a follow-up to an unanswered question in #1.

## Webdesign

An example of the design language in use is shown in the [demo (./web/)](./web/). The design plays with the topic of denoising again:

- Images are "denoised" on scroll
- Headlines are "denoised" on scroll: random characters turn into the actual text one after the other

## Backend

Two ways to access the event behind a login would be possible:

1. A virtual event management software like [Hopin](https://hopin.com/hopin-events)

| Pros         | Cons            |
|--------------|-----------------|
| Registration and login with ease | Pricey |
| Video streaming and virtual rooms | Flexibility in design is not ensured (chatbot for example) |
| Analytics are provided | Dependency on their software / servers |

2. Building an event site secured via login with a (self-hosted) free solution like [FusionAuth](https://fusionauth.io/)

| Pros         | Cons            |
|--------------|-----------------|
| Flexibility in design | Potential security risks |
| Free | More work, everything build from scratch |

Self-hosting and handling authentication provides a more flexible solution. One could argue that learning all the features of an event management software to fully customize the event to our needs would amount to the same hours of work. I'm not sure as I've never touched an online event management software.

But looking at our best-case design, I think any restrictions on the design site would be a dealbreaker and a self-hosted authentication sufficient. We are not displaying highly confidential work and I don't see this _free_ event as something of interest to be breached.

# Analog Festival

## Structure

- **One-Day-Festival**
- **8 hours**, from 14 to 22

To enable more artworks and guide the visitors, **artworks are classified into two categories**:
- **AI DREAMS**
  - _works that are inspired by AI-powered creations_
- **AI MADE**
  - _works that have been created, at least partially, by AI_

_All artist must provide a detailed description of their use of AI in their submitted work._ No algorithms have to be described in detail if recreation by other parties is feared.

Accepted **types of artworks**:
- Movies
- Artworks on canvas, digital and analog
- Installations

### Possible Timetable

| Time         | Cinema            | Neural Network | Output           |
|--------------|-------------------|----------------|------------------|
| 14:00        |                   |                | Opening Ceremony |
| 15:00        |                   | Workshop #1    |                  |
| 16:00        | Film Selection #1 |                |                  |
| 17:00        |                   |Panel w/ artists|                  |
| 18:00        | Film Selection #2 |                |                  |
| 19:00        |                   | Workshop #2    |                  |
| 20:00        | Film Selection #1 | Panel #1       |                  |
| 21:00        |                   |Closing Ceremony|                  |

#### Locations

There are three locations:
1. Cinema

The cinema is the location where movies are shown. Duh :D

2. Neural Network

Neural network means a place to relax and chat. It's possible to sit and talk with other guests, grab a drink and something to eat.
It is also used for workshops and panel discussions.

3. Output

Output is the gallery space. Here canvases, digital and analog, and installations are shown.

### Agenda

The submitted movies are grouped into selections and displaced as such. One movie can run multiple times in different selections. These selections are themed under one idea related to AI.

The workshops are open to any guests. Workshops are related to the topic of AI. Workshop ideas:
- Locally running stable diffusion and using Google Colab + intro to settings
- Prompt like a pro: How to write proper prompts and refine your output image.


Panel discussions are with a selected group of speakers in front of an audience. There is one-panel discussion with some of the artists displaying works at the festival And another one with one or more experts in the field of art and/or AI. Panel ideas:
- Discussion about the use of AI in art. Copyright problems, is it real art etc.
- Ethics of AI
- Incorporation of AI in an artist's workflow
- AI bias

## Submission evaluation

Two tiers:

1. AI-Production

Works where the final result is the direct output of an AI. Some tweaks are allowed, color correction, cropping etc., but the actual artwork is more or less the direct output of the AI used.

2. AI-Pre-Production

The AI's output was heavily altered afterward. It's still the base of the artwork, but a human mind builds on top of it afterward.

# Press Texts

_[Text generated by Chat GPT]_

## Introduction

The Filmuniversity Babelsberg in Potsdam will be hosting a one-day festival to showcase AI art. The festival aims to celebrate the use of AI in all forms of artistic expression, including films, artworks, and music. This festival will be a platform for artists to showcase their work and to engage in a discussion about the role of AI in the creative process.

The festival will highlight the ways in which AI is used to create new and innovative works, and how it can serve as a tool for artists to push the boundaries of what is possible. By focusing on the creative potential of AI, the festival hopes to shift the conversation away from debates about whether or not AI should be used in the arts, and instead to a discussion about how it can be used to create works that are meaningful and impactful.

With a lineup of some of the most innovative AI artists, the festival will provide a space for attendees to experience the cutting-edge of technology and the arts. Through workshops, panel discussions, and demonstrations, attendees will have the opportunity to learn about the latest developments in AI and its impact on the creative process.

This festival will be a unique and exciting opportunity to explore the relationship between AI and art, and to celebrate the many ways in which artists are using this powerful tool to create works that are truly innovative and thought-provoking. So mark your calendars and join us at the Filmuniversity Babelsberg in Potsdam to celebrate the intersection of AI and art.

## Structure

The one-day festival at the Filmuniversity Babelsberg in Potsdam will showcase AI art in two categories: AI DREAMS and AI MADE.

For the AI DREAMS category, artists are invited to submit works that are inspired by AI powered creations. This category is open to all forms of artistic expression, including movies, visuals, and installations, and the AIs used can range from image generators to text generators to pattern recognizers.

The AI MADE category is for works that have been created, at least partially, by AI. To submit for this category, artists must provide a detailed description of the role that AI played in the creation of their work, and all works must have a strong connection to the topic of AI used in the arts.

A committee will review all submissions to ensure that the works meet the criteria for exhibition. This will ensure that the festival showcases the best of AI art and celebrates the many ways in which artists are using AI to push the boundaries of what is possible in the arts.

So, if you're an artist working with AI, or just someone who is interested in the intersection of technology and art, be sure to submit your work to the festival and join us in celebrating the many ways in which AI is changing the face of the arts.