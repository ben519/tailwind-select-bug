import { Select } from '@/components/select'


export default async function Home() {
  return (
    <Select name="period" className="w-48">
      <option value="last_week">Last week</option>
      <option value="last_two">Last two weeks</option>
      <option value="last_month">Last month</option>
      <option value="last_quarter">Last quarter</option>
    </Select>
  )
}
