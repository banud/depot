class StoreController < ApplicationController
  def index
    @products = Product.all(:title)
  end
end
