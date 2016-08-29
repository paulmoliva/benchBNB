class Api::BenchesController < ApplicationController
  def create
    @bench = Bench.new
    @bench.save
  end

  def index
    if params[:bounds]
      @benches = Bench.in_bounds(params[:bounds])
    else
      @benches = Bench.all
    end
    render :index
  end
end
