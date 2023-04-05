# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: you'll fix it by doing a migration and adding the column of your foreign key in the Student model.

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: the use of params allows access to the attributes given in the model and by makes it easier to code in the RESTful routes.

Researched answer:

3. Name three rails generator commands. What is created by each?

Your answer: generate, db:, server
- generate - will create the application 
- db: - can be use to "create" a databese in the application, "migrate" to make adjustments in our database columns
- server: will run a local server from our terminal to see a version of our app in a web brower by using the http://localhost:3000/

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

# Index
- this action will give a tag under wich your index will live in a HTTP page "/students" for this case

action: "POST" location: /students

# Show
- This action will allows the user to see the instances created in the HTTP page

action: "GET" location: /students/new

# New
- This action will allow the user to create an instance from the HTTP page but it wont be reflected in the HTTP page.

action: "GET" location: /students/2

# Create
- This action will allow the user to create a new instances from the HTTP page and gives then a path/tag to live in once it has been created.

action: "GET" location: /students/2/edit

# Edit
- This action will allow the user to edit an expecific instance from the HTTP page. in most cases this action allows the editing but wont make the changes be reflected in the HTTP page/tag. 

action: "PATCH" location: /students/2

# Update
- this action allows the user to see the changes that were made in the Edit action,

action: "DELETE" location: /students/2 
 
# Destroy
-  This action allows th user to eliminate or delete and instance from the HTTP page.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
