const Constant = {
  ROLE: {
    Admin: 0,
    User: 1,
  },
  TASK_STATE: {
    no_status: 0,
    pending: 1,
    ready: 2,
    in_progress: 3,
    done: 4,
    0: { name: "No state", color: "#9FA6B2", icon: "" },
    1: { name: "Pending", color: "#DC4C64", icon: "" },
    2: { name: "Ready", color: "#3B71CA", icon: "" },
    3: { name: "In progress", color: "#E4A11B", icon: "" },
    4: { name: "Done", color: "#14A44D", icon: "" },
  },
};

export default Constant;
