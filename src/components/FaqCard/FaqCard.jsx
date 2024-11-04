const FaqCard = ( {faqData} ) => {
    return (
        <div className="bg-[#F7F7F7] w-full py-20">
            <div className="w-10/12 mx-auto flex flex-col gap-4">
                {
                    faqData.map((faq, index) => (
                        <div className="collapse collapse-arrow bg-white">
                            <input type="radio" name="my-accordion-1" defaultChecked={index === 0} />
                            <div className="collapse-title text-xl font-medium">{faq.faq_question}</div>
                            <div className="collapse-content">
                                <p>{faq.faq_answer}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FaqCard;