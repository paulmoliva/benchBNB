class Api::BenchesController < ApplicationController
  def create
    @bench = Bench.new
    @bench.save
  end

  def index
    @benches = Bench.all
    render :index
  end

end
