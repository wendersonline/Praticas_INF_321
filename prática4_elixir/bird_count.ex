defmodule BirdCount do
  def today([]), do: nil
  def today([today | _rest]), do: today

  def increment_day_count([]), do: [1]
  def increment_day_count([today | rest]), do: [today + 1 | rest]

  def has_day_without_birds?([]), do: false
  def has_day_without_birds?([0 | _rest]), do: true
  def has_day_without_birds?([_day | rest]), do: has_day_without_birds?(rest)

  def total(list), do: total(list, 0)

  defp total([], acc), do: acc
  defp total([day | rest], acc), do: total(rest, acc + day)

  def busy_days(list), do: busy_days(list, 0)

  defp busy_days([], acc), do: acc
  defp busy_days([day | rest], acc) when day >= 5, do: busy_days(rest, acc + 1)
  defp busy_days([_day | rest], acc), do: busy_days(rest, acc)
end
