class Bench < ActiveRecord::Base

  def self.in_bounds(bounds = {sw:{lat:0, lng:0}, ne:{lat: 999, lng: 999}})
    bounds = JSON.parse(bounds)['filter']['filters']['bounds']
    sw = bounds['sw']
    ne = bounds['ne']
    benches = Bench.all.reject do |bench|
      !(bench.lat > sw['lat'] && bench.lng > sw['lng'] && bench.lat < ne['lat'] && bench.lng < ne['lng'])
    end
    return benches
  end
end
