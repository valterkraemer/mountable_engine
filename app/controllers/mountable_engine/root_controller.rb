require_dependency "mountable_engine/application_controller"

module MountableEngine
  class RootController < ApplicationController
    def index
      @data = @data_service.get_data
    end
  end
end
