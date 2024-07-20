"use client";

export default function Legal() {
  return (
    <main className="mt-20 mx-10">
      <section className="max-w-5xl mx-auto w-full pb-20 pt-20">
        <div className="flex flex-col py-6 rounded-3xl bg-loti-200 border transition-shadow duration-200 ease-linear border-loti-300 text-white gap-20">
          <div className="h-full flex flex-col justify-between">
            <div className="px-6">
              <div className="flex items-start justify-between gap-x-4">
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold inline-flex items-center">
                    Available public legal documents
                  </p>
                </div>
              </div>
              <p className="text-sm mt-3 text-neutral-400 font-medium pr-4">
                By using any of our services, you automatically agree to the
                terms and privacy policies listed below as well as any other
                legal documents that may be posted on this website. We are not
                required to notify you of changes to any documents, so please
                make sure to check this website frequently. If you have any
                concerns or requests, feel free to reach out to us via{" "}
                <a href="https://discord.gg/evict" className="text-blue-400">
                  our support server
                </a>{" "}
                and open a ticket.
              </p>
            </div>
            <div>
              <hr className="border-t border-loti-300 w-full my-4" />
              <div className="px-6 flex flex-col gap-4">
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    Terms and Conditions
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      <a href="/legal/terms" className="text-blue-400">
                        Click here{" "}
                      </a>
                      to view the Terms and Conditions. Last revision 15th of July
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    Privacy Policy
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      <a href="/legal/privacy" className="text-blue-400">
                        Click here{" "}
                     </a>
                      to view the Privacy Policy. Last revision 15th of July
                      2024.
                    </p>
                  </div>
                </div>
                <hr className="border-t border-loti-300 w-full my-4" />
                <div className="">
                  <div className="flex items-start justify-between gap-x-4">
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-semibold inline-flex items-center">
                      </p>
                    </div>
                  </div>
                  <p className="text-sm mt-3 text-neutral-400 font-medium pr-4">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}