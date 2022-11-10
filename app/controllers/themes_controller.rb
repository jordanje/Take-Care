class ThemesController < ApplicationController

    def index
        render json: Theme.all, status: :ok
    end
end
