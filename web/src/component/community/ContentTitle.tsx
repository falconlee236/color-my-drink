interface conentTitleProps {
  title: string;
  subTitle: string | null;
}

export default function contentTitle(props: conentTitleProps) {
  return (
    <div className="mb-25">
      <h2 className="mb-10 text-22 font-semibold">{props.title}</h2>
      <p className="text-1 text-888">{props.subTitle}</p>
    </div>
  );
}
