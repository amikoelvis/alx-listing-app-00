// Props for reusable Card component
export interface CardProps {
  image: string
  title: string
  location: string
  price: string
  rating: number
  tags?: string[]
  guests: number
  beds: number
  baths: number
  isDiscounted?: boolean
  discountText?: string
}

// Props for reusable Button component
export interface ButtonProps {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
}

export interface PropertyAddress {
  state: string;
  city: string;
  country: string;
}

export interface PropertyOffers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: PropertyAddress;
  rating: number;
  category: string[];
  price: number;
  offers: PropertyOffers;
  image: string;
  discount: string;
}
