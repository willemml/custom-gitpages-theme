# This is a custom version of the Slate GitHub pages theme.

## Setup

**NOTE 1:** you can change the color of all links on the blog by editing the 2nd line of `/assets/css/style.css`

**NOTE 2:** to add an image to a markdown page on your blog enter the following text `![this-is-an-image]({{ site.url }}{{ site.baseurl }}/assets/images/example-image.png)` replacing example-image.png with your image's filename and put the image files in `/assets/images/`

**NOTE 3:** this guide assumes that you have basic git knowledge.

### Setup your blog using GitHub Pages:

1. Fork [this](https://github.com/wnuke/custom-gitpages-theme) GitHub repository
2. Edit _config.yml to your needs, make sure that baseurl is set correctly to your needs or leave it blank if you forked the repository to a repository named YOURGITUSER.github.io
3. Enable GitHub Pages in your repository settings
4. Congratulations, if you have set this up right then you should see your website at https://YOURGITUSER.github.io/BASEURL (BASEURL is what you set in _config.yml)

### Setup your blog outside of GitHub pages:

**Requirements:**

[Ruby](https://www.ruby-lang.org/en/downloads/) version 2.2.5 or above, including all development headers (ruby version can be checked by running `ruby -v`)

[RubyGems](https://rubygems.org/pages/download) (which you can check by running `gem -v`)

[GCC](https://gcc.gnu.org/install/) and [Make](https://www.gnu.org/software/make/) (in case your system doesn’t have them installed, which you can check by running `gcc -v`,`g++ -v` and `make -v` in your system’s command line interface)

**Setup:**

1. Clone or download [this](https://github.com/wnuke/custom-gitpages-theme) GitHub repository to the location where you want to store your blog's files
2. Edit _config.yml to your needs, make sure that baseurl is set correctly to your needs or leave it blank if you are hosting at the root url
3. Then run `gem install jekyll bundler`
4. Then in the directory where you downloaded the repository run `bundle install --path vendor/bundle`
5. To run the blog run the command `bundle exec jekyll serve --incremental` and the blog will be hosted on http://localhost:4000/
