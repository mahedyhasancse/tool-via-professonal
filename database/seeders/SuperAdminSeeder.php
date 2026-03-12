<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class SuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create super admin if doesn't exist
        $superAdmin = User::firstOrCreate(
            ['email' => 'admin@toolvia.io'],
            [
                'name' => 'Super Admin',
                'password' => Hash::make('admin123'), // Change this in production!
                'role' => 'super_admin',
            ]
        );

        if ($superAdmin->wasRecentlyCreated) {
            $this->command->info('Super Admin created successfully!');
            $this->command->info('Email: admin@toolvia.io');
            $this->command->info('Password: admin123');
            $this->command->warn('⚠️  Please change the password after first login!');
        } else {
            $this->command->info('Super Admin already exists.');
        }
    }
}
