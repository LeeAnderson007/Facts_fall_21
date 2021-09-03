class FactsController < ApplicationController

    def index
        render json: Fact.all
    end

    def rate
        @fact = Fact.fnd(para,s[:id])
        @fact.stars - p
    end

end
