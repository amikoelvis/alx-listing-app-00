// components/FilterSection.tsx
import React from 'react'
import Pill from './Pill'

interface FilterSectionProps {
  filters: string[]
  activeFilter: string
  onSelect: (filter: string) => void
}

const FilterSection: React.FC<FilterSectionProps> = ({
  filters,
  activeFilter,
  onSelect,
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {filters.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          isActive={activeFilter === filter}
          onClick={() => onSelect(filter)}
        />
      ))}
    </div>
  )
}

export default FilterSection
