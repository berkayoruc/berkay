import React from "react";
import ContentParagraph from "./ContentParagraph";
import ContentTitle from "./ContentTitle";

const Content = () => {
  return (
    <div className="content">
      <ContentTitle title={"Selamlar, Ben Berkay 🛰️"} />
      <ContentParagraph>
        Kodlamayı seven bir harita mühendisiyim. Profesyonel olarak web frontend
        geliştiricisi olarak çalışsam da, Android ve iOS ekosistemi için de
        uygulamalar geliştiriyorum.
      </ContentParagraph>
      <ContentParagraph>
        Kodlamayı seven bir harita mühendisiyim. Profesyonel olarak web frontend
        geliştiricisi olarak çalışsam da, Android ve iOS ekosistemi için de
        uygulamalar geliştiriyorum.
      </ContentParagraph>
      <ContentParagraph>
        Hakkımda daha fazla bilgiye ihtiyaç duyarsan, bana aşağıdaki platformlar
        üzerinden ulaşabilirsin.
      </ContentParagraph>
    </div>
  );
};

export default Content;
