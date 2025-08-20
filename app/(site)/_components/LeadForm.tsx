"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  email: z.string().email('Invalid email address'),
  state: z.string().optional(),
  budget: z.string().optional(),
  leadType: z.string().optional(),
})

type LeadFormData = z.infer<typeof leadSchema>

interface LeadFormProps {
  title?: string
  subtitle?: string
  className?: string
}

export function LeadForm({ title = "Get Instant Quote", subtitle, className = "" }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema)
  })

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        setIsSuccess(true)
        reset()
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center ${className}`}
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="text-green-600 text-5xl mb-4" aria-hidden="true">✓</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">We'll contact you within 5 minutes with your custom quote.</p>
      </motion.div>
    )
  }

  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg ${className}`}>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" aria-label="Lead generation form">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block font-medium mb-2">
              Full Name <span className="text-red-500" aria-label="required">*</span>
            </label>
            <input 
              {...register('name')} 
              id="name"
              type="text"
              className="w-full rounded-md border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent" 
              placeholder="Enter your full name" 
              aria-describedby={errors.name ? "name-error" : "name-help"}
              aria-invalid={!!errors.name}
              required
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                {errors.name.message}
              </p>
            )}
            {!errors.name && (
              <p id="name-help" className="text-gray-500 text-sm mt-1">
                Enter your first and last name
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block font-medium mb-2">
              Phone Number <span className="text-red-500" aria-label="required">*</span>
            </label>
            <input 
              {...register('phone')} 
              id="phone"
              type="tel"
              className="w-full rounded-md border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent" 
              placeholder="Enter your phone number" 
              aria-describedby={errors.phone ? "phone-error" : "phone-help"}
              aria-invalid={!!errors.phone}
              required
            />
            {errors.phone && (
              <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                {errors.phone.message}
              </p>
            )}
            {!errors.phone && (
              <p id="phone-help" className="text-gray-500 text-sm mt-1">
                We'll call you within 5 minutes
              </p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block font-medium mb-2">
            Email Address <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input 
            {...register('email')} 
            id="email"
            type="email"
            className="w-full rounded-md border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent" 
            placeholder="Enter your email address" 
            aria-describedby={errors.email ? "email-error" : "email-help"}
            aria-invalid={!!errors.email}
            required
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
          {!errors.email && (
            <p id="email-help" className="text-gray-500 text-sm mt-1">
              We'll send your quote via email
            </p>
          )}
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="state" className="block font-medium mb-2">State</label>
            <select 
              {...register('state')} 
              id="state"
              className="w-full rounded-md border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent"
              aria-describedby="state-help"
            >
              <option value="">Select State</option>
              <option value="CA">California</option>
              <option value="TX">Texas</option>
              <option value="FL">Florida</option>
              <option value="NY">New York</option>
              <option value="other">Other</option>
            </select>
            <p id="state-help" className="text-gray-500 text-sm mt-1">
              Where you're licensed to sell
            </p>
          </div>
          <div>
            <label htmlFor="budget" className="block font-medium mb-2">Monthly Budget</label>
            <select 
              {...register('budget')} 
              id="budget"
              className="w-full rounded-md border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent"
              aria-describedby="budget-help"
            >
              <option value="">Monthly Budget</option>
              <option value="1000">$1,000 - $2,500</option>
              <option value="2500">$2,500 - $5,000</option>
              <option value="5000">$5,000 - $10,000</option>
              <option value="10000">$10,000+</option>
            </select>
            <p id="budget-help" className="text-gray-500 text-sm mt-1">
              Your monthly lead budget
            </p>
          </div>
        </div>

        <motion.button 
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full rounded-full bg-secondary py-3 font-bold text-dark hover:bg-yellow-400 transition-colors disabled:opacity-50 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          aria-describedby="submit-help"
        >
          {isSubmitting ? 'Submitting...' : 'Get My Free Quote Now'}
        </motion.button>
        <p id="submit-help" className="text-xs text-gray-500 text-center">
          By submitting, you agree to receive calls and texts. TCPA compliant.
        </p>
      </form>
    </div>
  )
}
