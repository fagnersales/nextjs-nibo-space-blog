type ListItemProps = {
  title: string;
  text?: string;
};

export const ListItem = (props: ListItemProps) => {
  return (
    <div>
      <div className="flex flex-row place-items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-neutral-400" />
        <p className="text-2xl font-bold">{props.title}</p>
      </div>
      {!!props.text && <p className="-mt-3">{props.text}</p>}
    </div>
  );
};
