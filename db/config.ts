import { defineDb, defineTable, column} from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    googleId: column.text({ unique: true }),
    name: column.text()
  }
});

const Report = defineTable({
  columns: {
    reportId: column.number(),
    UserId: column.number({references: () => User.columns.id}),
    title: column.text(),
    location: column.text(),
    description: column.text(),
    image: column.text(),
    state: column.text()
  }
});

export default defineDb({
  tables: {User, Report}
});
