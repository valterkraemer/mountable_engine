module MountableEngine
  class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    before_action :set_data_service

    protected

    def set_data_service
      @data_service = MountableEngine::DataService.new(session[:user_id])
    end
  end
end
