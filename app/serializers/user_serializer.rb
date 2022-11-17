class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :total_time_this_week, :total_time_last_week, :longest


  has_many :meditations

  def total_time_this_week 
    today = Time.now.to_date
    rec = object.meditations.filter do | m |
        m.created_at > today.beginning_of_week
    end

    sum = 0
    rec.each do |m|
      if m.length != nil
        sum += m.length
      end
    end
    return sum
  end

  def total_time_last_week
    date = Date.today
    end_date = date-date.wday
    start_date = date-date.wday-6

    rec = object.meditations.filter do |m|
      m.created_at > start_date && m.created_at < end_date
    end

    sum = 0
    rec.each do |m|
      sum += m.length
    end
    return sum

  end

  def longest
    object.meditations.max{|a,b| a.length<=>b.length}
  end

end
