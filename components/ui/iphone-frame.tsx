export default function IPhoneFrame({ content }: { content: React.ReactNode }) {
  return (
    <div className="mockup-phone">
      <div className="mockup-phone-camera"></div>
      <div className="mockup-phone-display text-white grid place-content-center bg-neutral-900">
        {content}
      </div>
    </div>
  )
}