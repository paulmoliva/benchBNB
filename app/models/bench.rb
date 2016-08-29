class Bench < ActiveRecord::Base

  def self.in_bounds(bounds = {sw:{lat:0, lng:0}, ne:{lat: 999, lng: 999}})
    sw = bounds[:sw]
    ne = bounds[:ne]
    unless ((self.lat > sw[lat] && self.lng > sw[lng] && self.lat < ne[lat] && self.lng < ne[lat]))
      return true;
    else
      return false
    end
  end
end
