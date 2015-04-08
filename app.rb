require 'bundler'
Bundler.require

get '/' do
  erb :index

end
get '/calc/pythag' do
  erb :calc
end
get '/calc/conversion' do
  erb :calc2
end
get '/calc/fibonacci' do
  erb :calc3
end