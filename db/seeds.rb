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

coords.each do |coord|
  Bench.create!(lat: coord[0], lng: coord[1], description: Faker::Hipster.sentence(3));
end
