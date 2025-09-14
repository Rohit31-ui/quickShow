import { Inngest } from "inngest";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "movie-ticket-booking" });

// Inngest function to save user data
const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: `${first_name ?? ""} ${last_name ?? ""}`.trim(),
      image: image_url,
    };

    console.log("Creating user:", userData);

    await User.create(userData);
  }
);

// Inngest function to delete user
const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;
    console.log("Deleting user:", id);

    await User.findByIdAndDelete(id);
  }
);

// Inngest function to update user
const syncUserUpdation = inngest.createFunction(
  { id: "update-user-with-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: `${first_name ?? ""} ${last_name ?? ""}`.trim(),
      image: image_url,
    };

    console.log("Updating user:", id, userData);

    await User.findByIdAndUpdate(id, userData, { new: true });
  }
);

export const functions = [syncUserCreation, syncUserDeletion, syncUserUpdation];
