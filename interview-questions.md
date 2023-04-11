# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: you'll fix it by doing a migration and adding the column of your foreign key in the Student model.

Researched answer: If you created a model cohort that has many_students and forgot to add the foreign key you can use rails g migration AddCohort cohort:references  which will add a cohort_id to the students database column. Once you've created the migration you use the command rails db:migrate the students table will have a new a new foreign key that references the id column of the cohort table.

2. Which RESTful routes must always be passed params? Why?

Your answer: the use of params allows access to the attributes given in the model and by makes it easier to code in the RESTful routes.

Researched answer: params is mostly seem pass in the RESTful routs update, show and delete.

3. Name three rails generator commands. What is created by each?

Your answer: generate, db:, server
- generate - will create the application 
- db: - can be use to "create" a databese in the application, "migrate" to make adjustments in our database columns
- server: will run a local server from our terminal to see a version of our app in a web brower by using the http://localhost:3000/

Researched answer:
rails controller = controller generators which are used to generate controller.
rails g = model generator which we commonly use to create our models.
rails db: = generator that helps us make adjustments to our database, like create, migrate and seeds.

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


- As a developer, I want to add new tasks to my to-do list for chores around the house 

- As a developer, I want to view the list of tasks on my to-do list.

- As a developer, I want to be able to mark tasks as complete on my to-do list.

- As a developer, I want to be able to edit my task on my to-do list.

- As a developer, I want to set due dates for tasks on my to-do list for better tracking.

- As a developer, I want to delete tasks in my to-do list, if no longer needs to be done.

- As a developer, I want to prioritize tasks on my to-do list by priorities on my tracking.

- As a developer, I want to be able to search my to-do list for specific tasks.

- As a developer, I want to categorize tasks on my to-do list by priority and by due date.

- As a developer, I want to receive notifications on tasks needed to be done ASAP on my to-do list.

