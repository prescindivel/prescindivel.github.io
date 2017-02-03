require "rubygems"
require "bundler/setup"
require "stringex"

## -- Config -- ##

posts_dir    = "_posts/blog"    # directory for blog files
projects_dir = "_posts/projects"    # directory for projects files
ext          = "md"  # default new post file extension when using the new_post task


#############################
# Create a new Post or Page #
#############################

# usage rake newpost
desc "Create a new post in #{posts_dir}"
task :newpost, :title do |t, args|
  if args.title
    title = args.title
  else
    title = get_stdin("Enter a title for your post: ")
  end
  filename = "#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.#{ext}"
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  tags = get_stdin("Enter tags to classify your post (comma separated): ")
  description = get_stdin("Enter description your post: ")
  cover = get_stdin("Enter cover image your post: ")
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    post.puts "description: #{description}"
    post.puts "tags: [#{tags}]"
    post.puts "cover-post: #{cover}.jpg"
    post.puts "categories:"
    post.puts "  - blog"
    post.puts "---"
  end
end


# usage rake newproject
desc "Create a new project in #{projects_dir}"
task :newproject, :title do |t, args|
  if args.title
    title = args.title
  else
    title = get_stdin("Enter a title for your project: ")
  end
  filename = "#{projects_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.#{ext}"
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  link = get_stdin("Enter link your project: ")
  puts "Creating new project: #{filename}"
  open(filename, 'w') do |project|
    project.puts "---"
    project.puts "layout: null"
    project.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    project.puts "link: #{link}"
    project.puts "categories:"
    project.puts "  - projects"
    project.puts "sitemap: false"
    project.puts "---"
  end
end


def get_stdin(message)
  print message
  STDIN.gets.chomp
end

def ask(message, valid_options)
  if valid_options
    answer = get_stdin("#{message} #{valid_options.to_s.gsub(/"/, '').gsub(/, /,'/')} ") while !valid_options.include?(answer)
  else
    answer = get_stdin(message)
  end
  answer
end
