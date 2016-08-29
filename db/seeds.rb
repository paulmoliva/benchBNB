# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

coords = [
  [37.753817, -122.463358],
  [37.753274, -122.420786],
  [37.762265, -122.411534],
  [37.791870, -122.393281]
]

25.times do
  randCor = [( 37+ (rand * 0.1 ).round(6)), ( -122.47 - (rand * 0.065) ).round(6)]
  puts randCor
  coords.push(randCor)
end

coords.each do |coord|
  Bench.create!(lat: coord[0].round(6), lng: coord[1].round(6), description: Faker::Hipster.sentence(3));
  puts coord
end
