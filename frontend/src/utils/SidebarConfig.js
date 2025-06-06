import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  DirectionsCar as DirectionsCarIcon,
  CreditCard as CreditCardIcon,
  LocalShipping as LocalShippingIcon,
  Build as BuildIcon,
  Event as EventIcon,
  LocationOn as LocationOnIcon,
  History as HistoryIcon,
  Notifications as NotificationsIcon,
  CalendarToday as CalendarTodayIcon,
  Chat as ChatIcon,
  Payments as PaymentsIcon,
  ReportProblem as ReportProblemIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Settings as SettingsIcon,
  Receipt as ReceiptIcon,
  Campaign as CampaignIcon,
  Assessment as AssessmentIcon,
  Assignment as AssignmentIcon,
  Store as StoreIcon,
  Star as StarIcon,
  Group as GroupIcon,
  Work as WorkIcon,
  Feedback as FeedbackIcon,
  Layers as LayersIcon,
  PriceChange as PriceChangeIcon,
  Subscriptions as SubscriptionsIcon,
  Replay as ReplayIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  SupportAgent as SupportAgentIcon,
} from "@mui/icons-material";

const SIDEBAR_CONFIG = {
  customer: [
    { text: "Home", icon: DashboardIcon, path: "/customer/home" },
    { text: "Profile", icon: PersonIcon, path: "/customer/profile" },
    { text: "Vehicles", icon: DirectionsCarIcon, path: "/customer/vehicles" },
    { text: "BNPL & Credit", icon: CreditCardIcon, path: "/customer/bnpl" },
    {
      text: "Fleet Management",
      icon: LocalShippingIcon,
      path: "/customer/fleet",
    },
    {
      text: "Service Request",
      icon: BuildIcon,
      path: "/customer/service-request",
    },
    { text: "Appointments", icon: EventIcon, path: "/customer/appointments" },
    {
      text: "Live Tracking",
      icon: LocationOnIcon,
      path: "/customer/live-tracking",
    },
    {
      text: "Service History",
      icon: HistoryIcon,
      path: "/customer/service-history",
    },
    { text: "Reminders", icon: CalendarTodayIcon, path: "/customer/reminders" },
    { text: "Payments", icon: PaymentsIcon, path: "/customer/payments" },
    { text: "Chat Support", icon: ChatIcon, path: "/customer/chat" },
  ],
  provider: [
    { text: "Dashboard", icon: DashboardIcon, path: "/provider/dashboard" },
    {
      text: "KYC & Registration",
      icon: AssignmentTurnedInIcon,
      path: "/provider/kyc",
    },
    {
      text: "Profile & Area Setup",
      icon: StoreIcon,
      path: "/provider/profile",
    },
    {
      text: "Service Pricing",
      icon: PriceChangeIcon,
      path: "/provider/pricing",
    },
    {
      text: "Availability & Scheduling",
      icon: EventIcon,
      path: "/provider/availability",
    },
    { text: "Tiered Plans", icon: StarIcon, path: "/provider/tier-plans" },
    { text: "Offers & Coupons", icon: CampaignIcon, path: "/provider/offers" },
    {
      text: "Mechanics Management",
      icon: GroupIcon,
      path: "/provider/mechanics",
    },
    {
      text: "Inventory Management",
      icon: LayersIcon,
      path: "/provider/inventory",
    },
    {
      text: "Assignments",
      icon: AssignmentIcon,
      path: "/provider/assignments",
    },
    { text: "Work Status", icon: WorkIcon, path: "/provider/work-status" },
    { text: "Earnings", icon: PaymentsIcon, path: "/provider/earnings" },
    { text: "Payouts", icon: PaymentsIcon, path: "/provider/payouts" },
    {
      text: "Customer Feedback",
      icon: FeedbackIcon,
      path: "/provider/feedback",
    },
    { text: "SLA Compliance", icon: AssessmentIcon, path: "/provider/sla" },
    {
      text: "Mechanic Chat",
      icon: ChatBubbleOutlineIcon,
      path: "/provider/chat",
    },
    { text: "Invoices", icon: ReceiptIcon, path: "/provider/invoices" },
  ],
  mechanic: [
    { text: "Dashboard", icon: DashboardIcon, path: "/mechanic/dashboard" },
    { text: "Assigned Jobs", icon: AssignmentIcon, path: "/mechanic/jobs" },
    { text: "Job Detail", icon: VisibilityIcon, path: "/mechanic/job/:id" },
    {
      text: "Update Work Status",
      icon: WorkIcon,
      path: "/mechanic/update-status",
    },
    {
      text: "Chat with Provider",
      icon: ChatIcon,
      path: "/mechanic/chat/provider",
    },
    {
      text: "Chat with Customer",
      icon: ChatIcon,
      path: "/mechanic/chat/customer",
    },
  ],
  admin: [
    { text: "Dashboard", icon: DashboardIcon, path: "/admin/dashboard" },
    { text: "User Management", icon: PersonIcon, path: "/admin/users" },
    {
      text: "Provider Management",
      icon: AdminPanelSettingsIcon,
      path: "/admin/providers",
    },
    {
      text: "Service Categories",
      icon: BuildIcon,
      path: "/admin/service-categories",
    },
    { text: "Orders Panel", icon: ReceiptIcon, path: "/admin/orders" },
    { text: "Disputes", icon: ReportProblemIcon, path: "/admin/disputes" },
    {
      text: "Reports & Analytics",
      icon: AssessmentIcon,
      path: "/admin/analytics",
    },
    { text: "Promotions", icon: CampaignIcon, path: "/admin/promotions" },
    { text: "Cross-Sell Manager", icon: LayersIcon, path: "/admin/cross-sell" },
    {
      text: "Push Notifications",
      icon: NotificationsIcon,
      path: "/admin/notifications",
    },
    { text: "RBAC Manager", icon: LockIcon, path: "/admin/rbac" },
    {
      text: "Audit Logs",
      icon: AssignmentTurnedInIcon,
      path: "/admin/audit-logs",
    },
    {
      text: "Subscription Plans",
      icon: SubscriptionsIcon,
      path: "/admin/subscriptions",
    },
    {
      text: "Dynamic Pricing Engine",
      icon: SettingsIcon,
      path: "/admin/pricing-rules",
    },
    {
      text: "Ticketing System",
      icon: SupportAgentIcon,
      path: "/admin/tickets",
    },
    { text: "Reconciliation", icon: ReplayIcon, path: "/admin/reconciliation" },
    { text: "BNPL Approvals", icon: CreditCardIcon, path: "/admin/bnpl" },
    {
      text: "Reminder Logs",
      icon: CalendarTodayIcon,
      path: "/admin/reminders",
    },
    { text: "Feedback Analytics", icon: FeedbackIcon, path: "/admin/feedback" },
    {
      text: "Chat Transcript Analyzer",
      icon: ChatBubbleOutlineIcon,
      path: "/admin/chat-transcripts",
    },
  ],
};

export default SIDEBAR_CONFIG;
