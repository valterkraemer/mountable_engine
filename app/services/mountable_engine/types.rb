require 'dry-struct'

module MountableEngine  
  module Types
    include Dry::Types.module
    
    class DryUser < Dry::Struct
      attribute :id, Types::Strict::Integer
      attribute :email, Types::Strict::String
    end
  end
end