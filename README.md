# Quotable

Live version: http://quotable.surge.sh/


Quotable is an app that allows you to post, share, and retrieve your favorite quotes from books, movies and beyond.




####Notable features:

- Full-Stack: This project was built using React-Redux and Node. [Here's a link to the API repo.](https://github.com/renamos/quotable). 

- Search: Handling search for this project was an interesting task. I had already created three routes in the API to handle our searches (by author, quote, & book) but how to present those routes to the end user was a little tricky. My first solution was to display three buttons (Search Author, etc.) but I thought this was unintuitive and a little confusing for the user. Then I remembered that some sites have a "search by" dropdown menu, and I thought I'd give that a try. So I wrote up an if statement that checked the value of the dropdown menu and sent the search to the proper api route. Hooray!

- Adding quotes: Any visitor to the app can add quotes. These will display in the "Random quote" home page or can be searched for in the search component.

####Some Features I'd like to add

- Quote page: Currently, the user can only view quotes they added once they successfully add the quote and then search for it in the search menu. I want each quote to have it's own page where it shows all the info on that quote.

- Totally enhance the UX: There's a lot that can be done to improve the UX - allow users to save quotes, organize by customizable category, allow users to create quote collections to share...the list goes on.
 
- Social media: Connect with Facebook and Twitter share quote as status or tweet. 
 

