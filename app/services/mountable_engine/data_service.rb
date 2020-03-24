module MountableEngine
  class DataService
    attr_accessor :user_id

    def get_data
      user = User.find(@user_id).attributes.to_options
      
      return {
        user: MountableEngine::Types::DryUser.new(user)
      }
    end

    private

    def initialize(user_id)
      @user_id = user_id
    end
  end
end