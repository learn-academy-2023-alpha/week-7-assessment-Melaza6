# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is the controller of the application 
class BlogPostsController < ApplicationController
  def index
    # ---2) creates a varible that calls on all the instances created
    @posts = BlogPost.all
  end

  # ---3) defind the show and looks for an instance by the id.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) defines and createas a new instance.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) creates and instance  with the required parameters and meeting column attributes.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Finds the instance that is being request to be updated
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) updated the the blog post and redirects to the post blos paht if the update occurs
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) once the instance is Deleted it redirectes the the blog post page.
      redirect_to blog_posts_path
    end
  end

  # ---9) using Private Helps encapsulate permissible parameters 
  private
  def blog_post_params
    # ---10) checks on the permissible attributes to create the and update.
    params.require(:blog_post).permit(:title, :content)
  end
end
