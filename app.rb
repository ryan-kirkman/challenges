require 'json'

require 'sinatra/base'
require 'sinatra/assetpack'
require 'sinatra/jstpages'

class App < Sinatra::Base
  set :root, File.dirname(__FILE__)
  set :views, Proc.new { File.join(root, "app", "views") }

  register Sinatra::AssetPack
  register Sinatra::JstPages

  serve_jst '/jst.js'

  assets {
    serve '/js',     from: 'app/js'
    serve '/css',    from: 'app/css'
    serve '/images', from: 'app/images'

    js :app, '/js/app.js', [
      '/js/libs/jquery-2.1.1.min.js',
      '/js/libs/underscore-min.js',
      '/js/libs/backbone-min.js',
      '/js/libs/bootstrap.min.js',
      '/jst.js',
      '/js/application.js',
      '/js/backbone/*.js',
      '/js/backbone/*/**.js'
    ]

    css :app, '/css/app.css', [
      '/css/bootstrap.min.css',
      '/css/application.css'
    ]

    js_compression  :jsmin
    css_compression :simple
  }

  get '/' do
    erb :layout
  end

  get '/phones.json' do
    content_type 'application/json'
    File.read(File.join(settings.root, 'data', 'phones.json'))
  end

end

