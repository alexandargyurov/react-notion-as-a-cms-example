# Read the blog!

https://alexandar.me/blog/using-notion-as-a-cms-with-react

# Introduction

Notion as a CMS is a dream come true. I currently use Notion as my go to solution for everything I write. My diary, stories, ideas, notes, and research. I had a blog up and running on Medium, but decided it was time to move away and get everything on my personal site. Only problem: I needed a CMS. 

Now considering that I have everything I need on Notion, including all of the great features it comes with, it seemed like the perfect fit to also write my blogs on there. I started doing my research but unfortunately, to my disappointment, Notion did not have an official API.  Fear not though! As the amazing people over at splitbee have produced [notion-api-worker](https://github.com/splitbee/notion-api-worker)! It uses Notions private API to access any content, including your private pages too! This can be considered as a quick hack to get around Notions lack of API support, but so far from my experience it has worked flawlessly and is very stable. Notion have mentioned they are working on an official API, but it still seems far into the future.

The implementation is **very** easy (too easy in fact), that it's worth giving it a go. I'll show you in this blog post — which has been written in Notion! — how to setup a quick and easy CMS with React. 

