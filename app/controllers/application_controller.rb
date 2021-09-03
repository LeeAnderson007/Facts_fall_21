class ApplicationController < ActionController::API

    def index
        render json: Fact.all
    end
end
