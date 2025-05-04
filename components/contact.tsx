export default function Contact() {
  return (
    <section id="contacts" className="min-h-screen flex flex-col justify-center items-start px-6 md:px-16 py-24 bg-black text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Let’s Connect</h2>
      <p className="text-zinc-400 text-lg max-w-xl mb-8">
        Whether you have a project in mind, a question, or just want to say hi —
        feel free to reach out. I'm always open to new opportunities and
        conversations.
      </p>
      <div className="space-y-4">
        <p>
          <span className="font-semibold text-orange-500">Email:</span>{" "}
          <a
            href="mailto:kshitijyadav2003@gmail.com"
            className="hover:underline text-zinc-300">
            kshitijyadav2003@gmail.com
          </a>
        </p>
        <p>
          <span className="font-semibold text-orange-500">Location:</span> New
          Delhi, India
        </p>
        <p>
          <span className="font-semibold text-orange-500">Open to:</span>{" "}
          Freelance, full-time, and collaboration
        </p>
      </div>
    </section>
  );
}
