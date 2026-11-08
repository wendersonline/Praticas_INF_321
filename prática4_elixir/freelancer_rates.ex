defmodule FreelancerRates do
  @hours_per_day 8.0
  @days_per_month 22

  def daily_rate(hourly_rate), do: hourly_rate * @hours_per_day

  def apply_discount(before_discount, discount) do
    before_discount * (100 - discount) / 100
  end

  def monthly_rate(hourly_rate, discount) do
    hourly_rate
    |> daily_rate()
    |> apply_discount(discount)
    |> Kernel.*(@days_per_month)
    |> Float.ceil()
    |> trunc()
  end

  def days_in_budget(budget, hourly_rate, discount) do
    daily = hourly_rate |> daily_rate() |> apply_discount(discount)

    Float.floor(budget / daily, 1)
  end
end
